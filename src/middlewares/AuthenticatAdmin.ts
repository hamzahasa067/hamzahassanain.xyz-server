import express, {Request, Response, NextFunction} from "express";
export default async (req:Request,res:Response , next:NextFunction) => {
    next();
}