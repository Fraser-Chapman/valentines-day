package uk.co.fraser.valentines.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.AbstractWebSocketMessage;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.AbstractWebSocketHandler;
import uk.co.fraser.valentines.controller.model.HugsPayload;

@Component
public class HugsHandler extends AbstractWebSocketHandler {

    private final ObjectMapper objectMapper;

    public HugsHandler(final ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void handleMessage(final WebSocketSession session, final WebSocketMessage<?> message) throws Exception {
        final String payload = (String) message.getPayload();

        super.handleMessage(session, message);
    }

    @Override
    public void afterConnectionEstablished(final WebSocketSession session) throws Exception {
        final HugsPayload initialHugMessage = new HugsPayload("placeholder", "0", "0");
        final byte[] payload = objectMapper.writeValueAsBytes(initialHugMessage);

        session.sendMessage(new TextMessage(payload));
    }
}
