import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entitios/entity"
import { UniqueEntityID } from "../../core/entitios/unique-entity-id"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId?: UniqueEntityID
  title: string
  content: string
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
}