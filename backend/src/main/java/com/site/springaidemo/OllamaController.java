package com.site.springaidemo;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ollama")
@CrossOrigin("*")
public class OllamaController {
    private final OllamaChatModel chatModel;

    public OllamaController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/{msg}")
    public ResponseEntity<String> getAnswer(@PathVariable String msg) {
        String response = chatModel.call(msg);
        return ResponseEntity.ok(response);
    }
}
