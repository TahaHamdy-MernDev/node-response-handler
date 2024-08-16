import { Request, Response, NextFunction } from 'express';

declare module 'node-response-handler' {
    interface ResponseHandler extends Response {
      success(data?: any): void;
      badRequest(data?: any): void;
      internalServerError(data?: any): void;
      recordNotFound(data?: any): void;
      conflict(data?: any): void;
      validationError(data?: any): void;
      unAuthorized(data?: any): void;
      forbidden(data?: any): void;
    }
  
    const responseHandler: (req: Request, res: ResponseHandler, next: NextFunction) => void;
    export = responseHandler;
  }