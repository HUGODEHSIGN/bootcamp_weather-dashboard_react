'use client';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { useState } from 'react';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export function CitySearchCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [inputVal, setInputVal] = useState('');

  return (
    <div className="flex flex-col gap-2">
      <Select
        open={open}
        onOpenChange={() => setOpen(!open)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>

        <SelectContent>
          <div className="p-2 py-0 mb-1 ml-2 flex flex-row items-center gap-4 border-b">
            <Search className="w-4 h-4" />
            <Input
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Search"
              className="p-0 border-none"
            />
          </div>

          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
