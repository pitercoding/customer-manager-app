package com.pitergomes.exception;

import java.time.Instant;
import java.util.Map;

public record ApiError(
    String message,
    Map<String, String> errors,
    Instant timestamp
) {}
