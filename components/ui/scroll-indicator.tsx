"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
	return (
		<motion.div
			className="flex flex-col items-center gap-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.2, duration: 0.8 }}
			aria-hidden
		>
			<span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-brand-terracotta">
				Scroll
			</span>
			<motion.div
				className="flex h-12 w-px overflow-hidden bg-gradient-to-b from-brand-terracotta/60 to-transparent"
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				transition={{ delay: 1.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				style={{ originY: 0 }}
			/>
			<motion.div
				className="h-1.5 w-1.5 rounded-full bg-brand-terracotta/80"
				animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
				transition={{
					duration: 2.2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			/>
		</motion.div>
	);
}
