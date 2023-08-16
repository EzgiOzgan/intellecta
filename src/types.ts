type IntellectaSettings = {
    // General OpenAI Settings
    apiKey: string,
    engine: string
    // Card Generation Specific Settings
    CG_Temperature: number,
    CG_MaxTokens: number,
    CG_TopP: number,
    CG_FrequencyPenalty: number,
    CG_PresencePenalty: number,
}