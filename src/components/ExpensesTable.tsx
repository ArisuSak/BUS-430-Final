import React from "react";
import { motion } from "framer-motion";

type Expense = {
  category: string;
  details: string;
  cost: string;
};

type ExpensesTableProps = {
  expenses: Expense[];
  totalCost: string;
};

export function ExpensesTable({ expenses, totalCost }: ExpensesTableProps) {
  return (
    <section className="mb-16 bg-white p-8 rounded-lg shadow-sm border border-slate-100">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Trip Expenses</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-slate-700 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-slate-700 uppercase tracking-wider">
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {expenses.map((expense, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)" }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {expense.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {expense.details}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-slate-900">
                  {expense.cost}
                </td>
              </motion.tr>
            ))}
            <motion.tr
              className="bg-slate-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: expenses.length * 0.05 + 0.2 }}
            >
              <td
                colSpan={2}
                className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900"
              >
                Total
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-bold text-indigo-600">
                {totalCost}
              </td>
            </motion.tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
