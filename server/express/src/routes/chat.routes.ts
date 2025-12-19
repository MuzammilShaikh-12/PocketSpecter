import { Router, Request, Response } from 'express';
import { isAuthenticated } from '../middleware/auth';
import {
  sendChatMessage,
  createNewChat,
  loadChatHistory,
  deleteChat,
  getUserChats,
  checkFastAPIHealth,
} from '../services/chatProxy';

const router = Router();
// Health check endpoint
router.get('/health', async (req: Request, res: Response) => {
  try {
    const health = await checkFastAPIHealth();
    res.json(health);
  } catch (error) {
    res.status(503).json({
      error: 'Service Unavailable',
      message: (error as Error).message,
    });
  }
});

// Chat endpoints
router.post('/message', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const userId = user._id.toString();
    const { chat_session, message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const chatSession = parseInt(chat_session) || 0;
    const response = await sendChatMessage(userId, chatSession, message);

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Chat Error',
      message: (error as Error).message,
    });
  }
});

// Create new chat session
router.post('/new', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const userId = user._id.toString();
    const response = await createNewChat(userId);

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to create chat',
      message: (error as Error).message,
    });
  }
});

// Load chat history
router.post('/load', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const userId = user._id.toString();
    const { chat_session } = req.body;

    if (!chat_session) {
      return res.status(400).json({ error: 'chat_session is required' });
    }

    const chatSession = parseInt(chat_session);
    const response = await loadChatHistory(userId, chatSession);

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to load chat',
      message: (error as Error).message,
    });
  }
});

// Delete chat session
router.delete('/:chat_session', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const userId = user._id.toString();
    const chatSession = parseInt(req.params.chat_session);

    const response = await deleteChat(userId, chatSession);

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to delete chat',
      message: (error as Error).message,
    });
  }
});

// Get all chat sessions for user
router.get('/sessions', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const user = req.user as any;
    const userId = user._id.toString();
    const response = await getUserChats(userId);

    res.json(response);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to get chat sessions',
      message: (error as Error).message,
    });
  }
});

export default router;
