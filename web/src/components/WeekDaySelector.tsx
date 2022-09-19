import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface WeekDaysSelectorProps {
  weekDays: string[],
  setWeekDays: any
}

export function WeekDaySelector({ weekDays, setWeekDays }: WeekDaysSelectorProps) {
  return (
    <ToggleGroup.Root
      type="multiple"
      className="flex gap-1"
      value={weekDays}
      onValueChange={setWeekDays}
    >
      <ToggleGroup.Item
        value="0"
        title="Domingo"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        D
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="1"
        title="Segunda"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        S
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="2"
        title="Terça"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        T
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="3"
        title="Quarta"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        Q
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="4"
        title="Quinta"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        Q
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="5"
        title="Sexta"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        S
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="6"
        title="Sábado"
        className="w-[46px] h-[46px] rounded bg-zinc-900 on:bg-violet-500"
      >
        S
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}