'use client';
import React from 'react';
import { DollarSign, MapPin, Users, BookOpen, TrendingUp, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// @ts-expect-error - to ignore type
const ExpensesTable = ({ expenses, totalCost }) => {
  const categoryIcons = {
    Transportation: <MapPin className='h-5 w-5' />,
    Accommodation: <Users className='h-5 w-5' />,
    Meals: <BookOpen className='h-5 w-5' />,
    Miscellaneous: <Award className='h-5 w-5' />,
  };

  const categoryColors = {
    Transportation: 'text-blue-600 bg-blue-50',
    Accommodation: 'text-green-600 bg-green-50',
    Meals: 'text-orange-600 bg-orange-50',
    Miscellaneous: 'text-purple-600 bg-purple-50',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='mb-20'>
      <div className='flex items-center justify-between mb-12'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='text-3xl font-bold text-gray-900 flex items-center'>
          <DollarSign className='h-8 w-8 mr-3 text-green-600' />
          Financial Breakdown
        </motion.h2>

        <div className='text-right'>
          <p className='text-sm text-gray-500'>Total Investment</p>
          <p className='text-3xl font-bold text-green-600'>{totalCost}</p>
        </div>
      </div>

      <div className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'>
        <div className='overflow-x-auto'>
          <table className='min-w-full'>
            <thead>
              <tr className='bg-gray-50'>
                <th className='px-8 py-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider'>Category</th>
                <th className='px-8 py-6 text-left text-sm font-bold text-gray-700 uppercase tracking-wider'>Details</th>
                <th className='px-8 py-6 text-right text-sm font-bold text-gray-700 uppercase tracking-wider'>Investment</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {expenses.map((expense, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                  className='hover:bg-gray-50 transition-colors duration-200'>
                  <td className='px-8 py-6'>
                    <div className='flex items-center'>
                      <div className={`p-3 rounded-xl mr-4 ${categoryColors[expense.category] || 'text-gray-600 bg-gray-50'}`}>
                        {categoryIcons[expense.category] || <FileText className='h-5 w-5' />}
                      </div>
                      <span className='text-base font-bold text-gray-900'>{expense.category}</span>
                    </div>
                  </td>

                  <td className='px-8 py-6'>
                    <div className='text-sm text-gray-600 leading-relaxed max-w-md'>
                      {expense.details.split('\n').map((line, i) => (
                        <div key={i} className={i > 0 ? 'mt-1' : ''}>
                          {line.trim()}
                        </div>
                      ))}
                    </div>
                  </td>

                  <td className='px-8 py-6 text-right'>
                    <span className='text-lg font-bold text-gray-900'>{expense.cost}</span>
                  </td>
                </motion.tr>
              ))}

              <motion.tr
                className='bg-gradient-to-r from-gray-50 to-gray-100'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: expenses.length * 0.1 + 0.3 }}>
                <td colSpan={2} className='px-8 py-8'>
                  <div className='flex items-center'>
                    <div className='bg-green-100 p-3 rounded-xl mr-4'>
                      <TrendingUp className='h-6 w-6 text-green-600' />
                    </div>
                    <span className='text-xl font-bold text-gray-900'>Total Investment</span>
                  </div>
                </td>
                <td className='px-8 py-8 text-right'>
                  <span className='text-2xl font-bold text-green-600'>{totalCost}</span>
                </td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
};

export default ExpensesTable;
