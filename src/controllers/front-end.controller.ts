import express, {Request, Response, NextFunction} from "express";
export const getAllData = async (req:Request,res:Response , next:NextFunction) => {
    res.json({data:"You got it all do what you want with it and have fun"})
}