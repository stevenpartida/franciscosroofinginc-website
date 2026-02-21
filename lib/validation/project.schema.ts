import { z } from "zod";

const currentYear = new Date().getFullYear();

const yearSchema = z.preprocess(
  (val) => (val === "" || val == null ? undefined : Number(val)),
  z
    .number({
      required_error: "Year is required",
      invalid_type_error: "Invalid year",
    })
    .int("Invalid Year")
    .min(1900, "Invalid Year")
    .max(currentYear + 1, "Invalid Year"),
);

export const projectSchema = z.object({
  project_location: z.string().trim().min(1, "Location is required"),
  project_year: yearSchema,
  service_type: z.string().trim().min(1, "Service is required"),
  material_type: z.string().trim().min(1, "Material is required"),
  project_type: z.enum(["residential", "commercial"], {
    message: "Project type is required",
  }),
});

export const SignInSchema = z.object({
  email: z.string().trim().email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});
