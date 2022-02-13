/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';

import database from '../../../../shared/database/connection';

export default class ClassesController {
  async create(request: Request, response: Response) {
    const { title, subject, detail, user_id } = request.body;

    await database('messages').insert({
      user_id,
      title,
      subject,
      detail,
      created_at: Date.now(),
      is_read: false,
    });
    return response.status(201).json({ success: true });
  }

  async index(_request: Request, response: Response) {
    const messages = await database('messages').orderBy('created_at', 'desc');

    return response.status(201).json(messages);
  }

  async patch(request: Request, response: Response) {
    const { id } = request.params;
    const message = await database('messages')
      .where({
        id,
      })
      .update({
        is_read: true,
      });

    return response.status(201).json(message);
  }
}
