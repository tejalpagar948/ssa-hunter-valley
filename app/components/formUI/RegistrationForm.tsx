'use client';

type Props = {
  formData: any;
  isSubmitting: boolean;
  handleInputChange: (e: any) => void;
  handleFormSubmit: (e: any) => void;
};

export default function RegistrationForm({
  formData,
  isSubmitting,
  handleInputChange,
  handleFormSubmit,
}: Props) {
  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        placeholder="Full Name"
        className="w-full p-2 bg-white/10 text-white rounded"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="w-full p-2 bg-white/10 text-white rounded"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
        className="w-full p-2 bg-white/10 text-white rounded"
      />

      <select
        name="sport"
        value={formData.sport}
        onChange={handleInputChange}
        className="w-full p-2 bg-white/10 text-white rounded">
        <option value="">Select Sport</option>
        <option value="Tennis">Tennis</option>
        <option value="Padel">Padel</option>
        <option value="Squash">Squash</option>
        <option value="Badminton">Badminton</option>
      </select>

      <select
        name="level"
        value={formData.level}
        onChange={handleInputChange}
        className="w-full p-2 bg-white/10 text-white rounded">
        <option value="">Select Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2 bg-lime-500 text-black font-bold rounded">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
