import { motion } from "motion/react";
import React, { memo } from "react";

const StatsCard = memo(({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="text-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
    >
      <div className="text-2xl font-bold text-blue-400">{stat.count}+</div>
      <div className="text-sm text-gray-400">{stat.title}</div>
    </motion.div>
  );
});

const InterestCard = memo(({ interest, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300"
    >
      <div className="flex flex-wrap  items-center space-x-4">
        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
          {interest?.icon}
        </span>
        <div>
          <h4 className="text-white font-medium mb-1 group-hover:text-blue-400 transition-colors duration-300">
            {interest?.title}
          </h4>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
            {interest?.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
});

StatsCard.displayName = "StatsCard";
InterestCard.displayName = "InterestCard";

const About = ({ details }) => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-blue-500/30 rounded-full filter blur-[100px] opacity-20 animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Bio */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {details?.journey}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {details?.stats.map((stat, index) => (
                    <StatsCard key={stat.title} stat={stat} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Interests & Skills */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  What Drives Me
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {details?.drives_me?.map((item, index) => (
                    <InterestCard key={index} interest={item} index={index} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
