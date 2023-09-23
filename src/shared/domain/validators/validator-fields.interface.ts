export type FieldsError = {
  [filed: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError
  validatedData: PropsValidated
  validate(data: any): boolean
}
