import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema, 'topic');

export default Topic;
