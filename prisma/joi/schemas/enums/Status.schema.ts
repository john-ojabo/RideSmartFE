import Joi from 'joi';

export const StatusSchema = Joi.string().valid(...["Cancelled","Active","Expired","Paid"])