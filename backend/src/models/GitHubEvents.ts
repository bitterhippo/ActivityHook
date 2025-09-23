import mongoose, { Document, Schema } from "mongoose";

export interface IGitHubEvent extends Document {
  id: string;
  type: string;
  repo: { id: number; name: string; url: string };
  created_at: string;
  raw: any;
}

const GitHubEventSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  repo: {
    id: Number,
    name: String,
    url: String,
  },
  created_at: { type: String, required: true },
  raw: { type: Schema.Types.Mixed },
});

export const GitHubEvent = mongoose.model<IGitHubEvent>(
  "GitHubEvent",
  GitHubEventSchema
);
