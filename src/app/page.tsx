"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Sparkles,
  MessageSquareQuote,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const quotes: string[] = [
  "Believe you can and you're halfway there.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Success doesn't just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes later becomes never. Do it now.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible."
];

export default function HomePage() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleGenerate = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    setResults(shuffled.slice(0, 3));
  };

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="min-h-screen px-4 py-12 bg-gradient-to-br from-zinc-900 to-zinc-800 text-zinc-100">
      <div className="mx-auto max-w-[95%] md:max-w-5xl rounded-3xl shadow-xl p-6 sm:p-10 border border-zinc-700 bg-zinc-900/90 backdrop-blur-sm">
        <CardTitle className="text-2xl sm:text-3xl font-bold text-indigo-300 text-center mb-6">
          InspireMe Quotes
        </CardTitle>

        <Card className="mb-10 bg-transparent shadow-none">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-5xl font-extrabold tracking-tight flex justify-center items-center gap-2 text-indigo-300">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-pulse" /> InspireMe Quotes
            </CardTitle>
            <CardDescription className="mt-4 text-base sm:text-lg max-w-xl mx-auto text-zinc-300">
              Type anything and receive 3 magical quotes that boost your motivation.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Input
            placeholder="Type any keyword…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:w-80 border-zinc-600 focus-visible:ring-indigo-500 shadow-sm bg-zinc-800 text-white"
          />
          <Button
            onClick={handleGenerate}
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:scale-105 transition-transform"
          >
             Get Inspired
          </Button>
        </div>

        <Separator className="my-10 bg-zinc-600" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((quote, index) => (
            <Card
              key={index}
              className="border border-zinc-700 bg-zinc-800 shadow hover:shadow-lg transition-all"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquareQuote className="text-indigo-300" />
                  <Badge
                    variant="outline"
                    className="text-xs font-medium text-zinc-300 border-zinc-600"
                  >
                    Inspiration #{index + 1}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-200 text-md leading-relaxed italic">
                  “{quote}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="text-center text-sm text-gray-400 mt-12">
          Made with 💖 using Next.js, Tailwind & ShadCN — Nexium Internship 2025<br />
          Built by Muhammad Arslan
        </footer>
      </div>
    </main>
  );
}
