<template>
  <div v-if="isOpen" class="chat-bot-overlay" @click.self="closeChatBot">
    <div class="chat-bot-container" :style="containerStyles">
      <div class="chat-header" :style="headerStyles">
        <div class="header-title">
          <v-icon class="me-2">mdi-robot</v-icon>
          {{ $t('ai_chatbot', 'AI Assistant') }}
        </div>
        <v-btn
          icon
          small
          @click="closeChatBot"
          class="close-btn"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <div class="chat-messages" ref="messagesContainer" :style="messagesContainerStyles">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="['message', msg.role]"
          :style="getMessageStyles(msg.role)"
        >
          {{ msg.text }}
        </div>

        <div v-if="isLoading" class="message bot loader-wrapper" :style="getMessageStyles('bot')">
          <div class="loader" :style="loaderStyles"></div>
        </div>
      </div>

      <div class="chat-input" :style="chatInputStyles">
        <v-text-field
          v-model="newMessage"
          @keyup.enter="sendMessage"
          :placeholder="$t('ask_question', 'Ask your question...')"
          :disabled="isLoading"
          outlined
          dense
          hide-details
          class="input-field"
        />
        <v-btn
          @click="sendMessage"
          :disabled="isLoading"
          icon
          color="primary"
          class="send-btn"
        >
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBot',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    messages: [],
    newMessage: '',
    isLoading: false,
    messagesContainer: null,
    sessionId: null
  }),
  mounted() {
    // Initialize the greeting message after i18n is fully ready
    this.sessionId = this.generateSessionId();
    this.messages = [
      { 
        role: 'bot', 
        text: this.$t("tell_me_more")
      }
    ];
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }
    }
  },
  computed: {
    isDarkMode() {
      return this.$vuetify.theme.dark;
    },
    primaryColor() {
      return this.isDarkMode 
        ? this.$vuetify.theme.themes.dark.primary 
        : this.$vuetify.theme.themes.light.primary;
    },
    surfaceColor() {
      return this.isDarkMode 
        ? this.$vuetify.theme.themes.dark.surface 
        : this.$vuetify.theme.themes.light.surface;
    },
    containerStyles() {
      return {
        backgroundColor: this.surfaceColor
      };
    },
    headerStyles() {
      return {
        backgroundColor: this.primaryColor,
        color: 'white'
      };
    },
    messagesContainerStyles() {
      const bgColor = this.isDarkMode ? '#1e1e1e' : '#f8f9fa';
      return {
        backgroundColor: bgColor
      };
    },
    chatInputStyles() {
      return {
        backgroundColor: this.surfaceColor,
        borderTopColor: this.isDarkMode ? '#404040' : '#e0e0e0'
      };
    },
    loaderStyles() {
      return {
        '--loader-primary': this.primaryColor,
        '--loader-secondary': this.isDarkMode ? '#404040' : '#e0e0e0'
      };
    }
  },
  methods: {
    getMessageStyles(role) {
      if (role === 'user') {
        return {
          backgroundColor: this.primaryColor,
          color: 'white'
        };
      } else {
        // Bot message
        const bgColor = this.isDarkMode ? '#2a2a2a' : 'white';
        const textColor = this.isDarkMode ? '#e0e0e0' : '#333';
        const borderColor = this.isDarkMode ? '#404040' : '#e0e0e0';
        return {
          backgroundColor: bgColor,
          color: textColor,
          borderColor: borderColor
        };
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        if (this.$refs.messagesContainer) {
          this.$refs.messagesContainer.scrollTop = 
            this.$refs.messagesContainer.scrollHeight;
        }
      });
    },
    sendMessage() {
      if (!this.newMessage.trim() || this.isLoading) return;

      this.messages.push({ role: 'user', text: this.newMessage });
      const userInput = this.newMessage;
      this.newMessage = '';

      this.isLoading = true;
      this.scrollToBottom();

      // Make API call to the chatbot webhook
      const myHeaders = new Headers();
      myHeaders.append("SessionID", this.sessionId);
      myHeaders.append("Content-Type", "application/json");

      const requestBody = JSON.stringify({
        chatInput: userInput
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: requestBody,
        redirect: "follow"
      };

      fetch("https://n8n.srv765524.hstgr.cloud/webhook-test/86c2d6f4-f995-4f80-a545-e4a89c3dc77c", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          this.isLoading = false;
          try {
            // Parse the JSON response
            const parsedResult = JSON.parse(result);
            // Extract the output from the first element of the array
            const botOutput = parsedResult[0]?.output || 'No response from server';
            this.messages.push({
              role: 'bot',
              text: botOutput
            });
          } catch (parseError) {
            // If parsing fails, display the raw result
            console.error('JSON Parse Error:', parseError);
            this.messages.push({
              role: 'bot',
              text: result || 'Unable to parse response'
            });
          }
          this.scrollToBottom();
        })
        .catch((error) => {
          this.isLoading = false;
          console.error('ChatBot Error:', error);
          this.messages.push({
            role: 'bot',
            text: `❌ Error: ${error.message || 'Failed to connect to the server. Please try again.'}`
          });
          this.scrollToBottom();
        });
    },
    generateSessionId() {
      // Generate a unique session ID using timestamp and random number
      return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },
    closeChatBot() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
/* Overlay backdrop */
.chat-bot-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  z-index: 9999;
  animation: slideUp 0.3s ease-out;
}

/* Mobile: full screen */
@media (max-width: 600px) {
  .chat-bot-overlay {
    justify-content: center;
    align-items: center;
  }

  .chat-bot-container {
    width: 100% !important;
    height: 100vh !important;
    border-radius: 0 !important;
    max-width: none !important;
  }
}

/* Desktop: bottom-right corner */
@media (min-width: 601px) {
  .chat-bot-overlay {
    background: transparent;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .chat-bot-container {
    margin: 20px;
    margin-bottom: 20px;
  }
}

/* Chat container */
.chat-bot-container {
  width: 400px;
  height: 600px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: calc(100vw - 40px);
}

/* Header */
.chat-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.header-title {
  display: flex;
  align-items: center;
}

.close-btn {
  color: white !important;
}

/* Messages area */
.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Message bubbles */
.message {
  padding: 12px 16px;
  border-radius: 16px;
  max-width: 85%;
  font-size: 0.95rem;
  line-height: 1.4;
  word-wrap: break-word;
}

.message.user {
  align-self: flex-end;
  border-bottom-right-radius: 4px;
}

.message.bot {
  align-self: flex-start;
  border: 1px solid;
  border-bottom-left-radius: 4px;
}

/* Loader */
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  padding: 0 15px;
}

.loader {
  width: 14px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--loader-primary);
  transform-origin: top;
  display: grid;
  animation: l3-0 1s infinite linear;
  position: relative;
  top: 6px;
}

.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  background: var(--loader-primary);
  border-radius: 50%;
  transform-origin: top;
  animation: inherit;
  animation-name: l3-1;
}

.loader::after {
  background: var(--loader-secondary);
  --s: 180deg;
}

@keyframes l3-0 {
  0%, 20% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

@keyframes l3-1 {
  50% { transform: rotate(var(--s, 90deg)); }
  100% { transform: rotate(0); }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input area */
.chat-input {
  display: flex;
  padding: 12px;
  border-top: 1px solid;
  gap: 8px;
  align-items: center;
}

.input-field {
  flex: 1;
}

.send-btn {
  flex-shrink: 0;
}
</style>
