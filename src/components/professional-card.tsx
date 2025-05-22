
// Definición de los datos de los profesionales
const professionals = [
  {
    id: 1,
    title: "Yoga",
    name: "Carina Conti",
    license: "",
    icon: "/icons/yoga-icon.png",
  },
  {
    id: 2,
    title: "Kinesiología",
    name: "Jesica Juan",
    license: "M.N. 01344",
    icon: "/icons/kinesiology-icon.png",
  },
  {
    id: 3,
    title: "Psicología",
    name: "Monica Slonimski",
    license: "M.N. 39133",
    icon: "/icons/psychology-icon.png",
  },
  {
    id: 4,
    title: "Director médico",
    name: "Jorge Mario Muszkat",
    license: "M.N. 62.998",
    icon: "/icons/medical-icon.png",
  },
  {
    id: 5,
    title: "Lic en nutrición",
    name: "Lic.Karina J.E. Lusa",
    license: "M.N. 4512",
    icon: "/icons/nutrition-icon.png",
  },
  {
    id: 6,
    title: "Musicoterapia",
    name: "Daniela Arévalo",
    license: "",
    icon: "/icons/music-icon.png",
  },
  {
    id: 7,
    title: "Terapia ocupacional",
    name: "Romina N. Pattacini",
    license: "",
    icon: "/icons/therapy-icon.png",
  },
]

export default function ProfessionalCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
      {professionals.map((professional) => (
        <div key={professional.id} className="flex flex-col items-center bg-gray-200 rounded-lg p-4">
          <div className="bg-white rounded-lg p-4 mb-2 w-24 h-24 flex items-center justify-center">
            <img
              src={professional.icon || "/placeholder.svg"}
              alt={professional.title}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
          <div className="text-center">
            <h3 className="font-medium text-sm">{professional.title}</h3>
            <p className="text-sm mt-1">{professional.name}</p>
            {professional.license && <p className="text-xs mt-1">{professional.license}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
