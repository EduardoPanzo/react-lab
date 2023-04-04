import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import pt from "date-fns/locale/pt";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const avaliableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    {
      locale: pt,
    }
  );
  return (
    <a href={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{avaliableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 pt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {type === "live" ? " AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </a>
  );
}
