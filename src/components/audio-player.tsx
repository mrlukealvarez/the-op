"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title }: { src: string; title: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const seek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      const bar = progressRef.current;
      if (!audio || !bar || !duration) return;
      const rect = bar.getBoundingClientRect();
      const ratio = Math.max(
        0,
        Math.min(1, (e.clientX - rect.left) / rect.width),
      );
      audio.currentTime = ratio * duration;
    },
    [duration],
  );

  const cycleSpeed = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const speeds = [1, 1.5, 2];
    const nextIndex = (speeds.indexOf(playbackRate) + 1) % speeds.length;
    const next = speeds[nextIndex];
    audio.playbackRate = next;
    setPlaybackRate(next);
  }, [playbackRate]);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-slate-800/80 border border-slate-700 rounded-xl shadow-sm p-4 w-full"
    >
      <audio ref={audioRef} src={src} preload="metadata" />

      <div className="flex items-center gap-3 mb-3">
        <Volume2 className="size-4 text-amber-600 shrink-0" />
        <span className="text-sm font-medium text-white truncate">{title}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="shrink-0 size-9 rounded-full bg-amber-600 hover:bg-amber-700 text-white flex items-center justify-center transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="size-4" />
          ) : (
            <Play className="size-4 ml-0.5" />
          )}
        </button>

        <div
          ref={progressRef}
          onClick={seek}
          className="flex-1 h-2 bg-slate-700 rounded-full cursor-pointer relative overflow-hidden"
          role="progressbar"
          aria-valuenow={currentTime}
          aria-valuemin={0}
          aria-valuemax={duration}
        >
          <div
            className="absolute inset-y-0 left-0 bg-amber-600 rounded-full transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-xs text-white/50 tabular-nums shrink-0 min-w-[80px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          onClick={cycleSpeed}
          className="shrink-0 text-xs font-semibold px-2 py-1 rounded-md bg-slate-700 hover:bg-amber-900/50 hover:text-amber-400 text-white/60 transition-colors tabular-nums"
        >
          {playbackRate}x
        </button>
      </div>
    </motion.div>
  );
}
