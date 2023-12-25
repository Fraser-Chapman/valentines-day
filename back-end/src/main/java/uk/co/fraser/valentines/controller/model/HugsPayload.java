package uk.co.fraser.valentines.controller.model;

import static java.util.Objects.nonNull;

public record HugsPayload(String username, String xCoordinate, String yCoordinate) {

    public boolean isValid() {
        return nonNull(username)
                && nonNull(xCoordinate)
                && nonNull(yCoordinate);
    }
}
