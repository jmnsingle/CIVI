export interface SendMessageProps {
  id: string;
  message: string;
}

export interface MessageResponse {
  id: string;
  title: string;
  subject: string;
  detail: string;
  created_at: string;
  is_read: boolean;
}
