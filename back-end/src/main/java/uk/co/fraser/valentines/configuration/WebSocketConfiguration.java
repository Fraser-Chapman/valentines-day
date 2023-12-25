package uk.co.fraser.valentines.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import uk.co.fraser.valentines.controller.HugsHandler;

@Configuration
@EnableWebSocket
public class WebSocketConfiguration implements WebSocketConfigurer {

    private final ObjectMapper objectMapper;

    public WebSocketConfiguration(final ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void registerWebSocketHandlers(final WebSocketHandlerRegistry registry) {
        registry.addHandler(new HugsHandler(objectMapper), "/hugs");
    }
}
