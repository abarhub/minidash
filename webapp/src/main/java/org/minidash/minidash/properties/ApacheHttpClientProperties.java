package org.minidash.minidash.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.time.Duration;

@Component
@ConfigurationProperties(prefix = "apache-http-client")
public class ApacheHttpClientProperties {

    private Duration socketTimeout;
    private Duration connectionTimeout;
    private Duration timeToLive;
    private int maxConnectionTotal;
    private int maxConnectionPerRoute;
    private Duration soTimeout;
    private Duration connectionRequestTimeout;
    private Duration responseTimeout;

    public Duration getSocketTimeout() {
        return socketTimeout;
    }

    public void setSocketTimeout(Duration socketTimeout) {
        this.socketTimeout = socketTimeout;
    }

    public Duration getConnectionTimeout() {
        return connectionTimeout;
    }

    public void setConnectionTimeout(Duration connectionTimeout) {
        this.connectionTimeout = connectionTimeout;
    }

    public Duration getTimeToLive() {
        return timeToLive;
    }

    public void setTimeToLive(Duration timeToLive) {
        this.timeToLive = timeToLive;
    }

    public int getMaxConnectionTotal() {
        return maxConnectionTotal;
    }

    public void setMaxConnectionTotal(int maxConnectionTotal) {
        this.maxConnectionTotal = maxConnectionTotal;
    }

    public int getMaxConnectionPerRoute() {
        return maxConnectionPerRoute;
    }

    public void setMaxConnectionPerRoute(int maxConnectionPerRoute) {
        this.maxConnectionPerRoute = maxConnectionPerRoute;
    }

    public Duration getSoTimeout() {
        return soTimeout;
    }

    public void setSoTimeout(Duration soTimeout) {
        this.soTimeout = soTimeout;
    }

    public Duration getConnectionRequestTimeout() {
        return connectionRequestTimeout;
    }

    public void setConnectionRequestTimeout(Duration connectionRequestTimeout) {
        this.connectionRequestTimeout = connectionRequestTimeout;
    }

    public Duration getResponseTimeout() {
        return responseTimeout;
    }

    public void setResponseTimeout(Duration responseTimeout) {
        this.responseTimeout = responseTimeout;
    }
}
