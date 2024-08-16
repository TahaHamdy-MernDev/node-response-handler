import { Request, Response, NextFunction } from "express";

declare module "node-response-handler" {
  interface ResponseHandler extends Response {
    /**
     * Respond with a success message.
     * @param data - Optional data to send with the response.
     */
    success(data?: { message?: string; data?: any }): void;

    /**
     * Respond with a bad request error.
     * @param data - Optional data to send with the response.
     */
    badRequest(data?: { message?: string; data?: any }): void;

    /**
     * Respond with an internal server error.
     * @param data - Optional data to send with the response.
     */
    internalServerError(data?: {
      message?: string;
      stack?: string;
      data?: any;
    }): void;

    /**
     * Respond with a record not found error.
     * @param data - Optional data to send with the response.
     */
    recordNotFound(data?: {
      message?: string;
      routeMessage?: string;
      data?: any;
    }): void;

    /**
     * Respond with a conflict error.
     * @param data - Optional data to send with the response.
     */
    conflict(data?: { message?: string; data?: any }): void;

    /**
     * Respond with a validation error.
     * @param data - Optional data to send with the response.
     */
    validationError(data?: {
      message?: string;
      errors?: any;
      data?: any;
    }): void;

    /**
     * Respond with an unauthorized error.
     * @param data - Optional data to send with the response.
     */
    unauthorized(data?: { message?: string; data?: any }): void;

    /**
     * Respond with a forbidden error.
     * @param data - Optional data to send with the response.
     */
    forbidden(data?: { message?: string; data?: any }): void;
  }

  const responseHandler: (
    req: Request,
    res: ResponseHandler,
    next: NextFunction
  ) => void;
  export = responseHandler;
}
