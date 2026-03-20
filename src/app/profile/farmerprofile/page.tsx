'use client'

import { useFarmerProfile } from './farmdetail'
import { 
  ANIMAL_OPTIONS, 
  CROP_OPTIONS, 
  ACTIVITY_CATEGORIES, 
  FACILITY_OPTIONS,
  FORM_STEPS 
} from './options'

export default function FarmerProfilePage() {
  const {
    currentStep,
    isSubmitting,
    formData,
    validationErrors,
    allAnimals,
    allCrops,
    canProceed,
    handleInputChange,
    handleCheckboxChange,
    handleFileChange,
    handleAddCustomItem,
    handleRemove,
    goToNextStep,
    goToPreviousStep,
    handleSubmit
  } = useFarmerProfile()

  const getStepClass = (stepId: number): string => {
    const baseClass = 'w-8 h-8 mx-auto rounded-full flex items-center justify-center'
    if (currentStep > stepId) return `${baseClass} bg-green-500 text-white`
    if (currentStep === stepId) return `${baseClass} bg-primary text-white`
    return `${baseClass} bg-gray-200 text-gray-600`
  }

  const onAddCustomAnimal = () => handleAddCustomItem('animal', formData.newAnimalInput)
  const onAddCustomCrop = () => handleAddCustomItem('crop', formData.newCropInput)
  const onAddCustomActivity = () => handleAddCustomItem('activity', formData.newActivityInput, formData.newActivityCategory)
  const onRemoveCustomAnimal = (animal: string) => handleRemove('animal', animal)
  const onRemoveCustomCrop = (crop: string) => handleRemove('crop', crop)
  const onRemoveActivity = (activity: string) => handleRemove('activity', activity)

  // Step 1: Farm Information
  if (currentStep === 1) {
    // Farm info form with name, location, description, etc.
  }

  // Step 2: Animals & Crops
  if (currentStep === 2) {
    // Animals and crops selection with custom additions
  }

  // Step 3: Activities
  if (currentStep === 3) {
    // Activities selection by category with custom additions
  }

  // Step 4: Facilities & Accommodation
  if (currentStep === 4) {
    // Facilities checkboxes and accommodation options
  }

  // Step 5: Media
  if (currentStep === 5) {
    // Photo and video uploads
  }

  // Step 6: Verification & Summary
  if (currentStep === 6) {
    // Document uploads and profile summary
  }

  // Navigation buttons with Previous/Next/Submit
}