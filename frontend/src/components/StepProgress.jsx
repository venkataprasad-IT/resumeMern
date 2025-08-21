import React from 'react';
import { Check } from 'react-feather';
import { shimmerStyle } from '../assets/dummystyle';
const StepProgress = ({ progress }) => {
    return (
        <>
            <div className='relative w-full h-4 bg-white/5 backdrop-blur-2xl overflow-hidden rounded-full border border-white/10'>
                {/* Background Pulse Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 animate-pulse' />

                {/* Main Progress Bar */}
                <div
                    className='relative h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-600 animate-flow bg-[length:200%_100%] transition-all duration-700 ease-out rounded-full overflow-hidden'
                    style={{ width: `${progress}%` }}
                />

                {/* Shimmer Effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer' />

                {/* Animated Bubbles */}
                <div className='absolute inset-0 opacity-80'>
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute top-1/2 w-2 h-2 bg-white rounded-full animate-bubble shadow-lg'
                            style={{
                                left: `${(i + 1) * 12}%`,
                                animationDelay: `${i * 0.25}s`,
                                transform: 'translateY(-50%)',
                            }}
                        />
                    ))}
                </div>

                {/* Particle Effects */}
                <div className='absolute inset-0'>
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className='absolute w-1 h-1 bg-white/60 rounded-full animate-float'
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Progress Label and Completion Indicator */}
            <div className='relative'>
                {progress > 0 && (
                    <div
                        className='absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/60 to-white/30 blur-sm'
                        style={{ left: `${Math.max(0, progress - 4)}%` }}
                    />
                )}

                <div className='flex justify-between items-center mt-3'>
                    <div className='text-xs font-bold text-white/80'>
                        {progress < 25
                            ? "Getting Started"
                            : progress < 50
                            ? "Making Progress"
                            : progress < 75
                            ? "Almost There"
                            : "Nearly Completed"}
                    </div>

                    {progress === 100 && (
                        <div className='w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center'>
                            <Check size={12} className="text-white" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default StepProgress;
