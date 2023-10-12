import { Entity } from "../../core/entitios/entity"

interface StudentProps {
  name: string
}

export class Student extends Entity<StudentProps> {
}