const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: {
    name: string;
  };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-semibold mb-4">Personal Info</h2>
        <div className="space-y-3">
          <p className="text-lg">
            <span className="font-medium text-gray-400">Age:</span> {age?.age}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-400">Gender:</span> {gender?.gender}
          </p>
          <p className="text-lg">
            <span className="font-medium text-gray-400">Country:</span> {country?.country[0]?.country_id}
          </p>
        </div>
      </div>
    </div>
  );
}
