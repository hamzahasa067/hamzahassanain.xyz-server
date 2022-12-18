import express, {Request, Response, NextFunction} from "express";
import debug from "../utils/Debug";

export default ((err:Error, req:Request, res:Response, next:NextFunction) => {
    debug.error(err);
    res.status(500).json({"Error":err.message});
})
