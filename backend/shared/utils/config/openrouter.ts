import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

export const openrouter = new OpenAI({
	baseURL: 'https://openrouter.ai/api/v1',
	apiKey: process.env.OPENROUTER_API_KEY,
	defaultHeaders: {
		'HTTP-Referer': 'https://localhost:5173',
		'X-Title': 'My AI chat app'
	}
})