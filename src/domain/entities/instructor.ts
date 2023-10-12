import { Entity } from "../../core/entitios/entity"
import { UniqueEntityID } from "../../core/entitios/unique-entity-id"

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps> {
  static create(
    props: InstructorProps,
    id?: UniqueEntityID,
  ) {
    const instructor = new Instructor(props, id)

    return instructor
  }
}