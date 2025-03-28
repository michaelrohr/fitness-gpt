
import TrainingCalendar from '../components/TrainingCalendar';
import GoalCoachDialog from '../components/GoalCoachDialog';
import WeeklyPlanDisplay from '../components/WeeklyPlanDisplay';
import TrainingHistory from '../components/TrainingHistory';

export default function Home() {
  const email = "demo@fitness.com"; // später dynamisch aus Login/Profile

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🏋️‍♂️ Willkommen bei Fitness-GPT</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📆 Dein Trainingskalender</h2>
        <TrainingCalendar email={email} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🎯 Ziele definieren mit dem GPT-Coach</h2>
        <GoalCoachDialog email={email} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📋 Dein Wochenplan</h2>
        <WeeklyPlanDisplay email={email} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📖 Dein Trainingstagebuch</h2>
        <TrainingHistory email={email} />
      </section>
    </div>
  );
}
