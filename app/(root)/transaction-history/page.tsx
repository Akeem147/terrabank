"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { FC, useState } from "react";

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: "debit" | "credit";
}

// Transactions array defined here
const transactions: Transaction[] = [
  { id: 1, date: "2024-11-19", description: "Facebook Treasury Deposit", amount: 750000, type: "credit" },
  { id: 2, date: "2024-11-22", description: "Grocery Store Purchase", amount: 45000, type: "debit" },
  { id: 3, date: "2024-11-23", description: "Salary Credit", amount: 1500000, type: "credit" },
  { id: 4, date: "2024-11-23", description: "Electricity Bill Payment", amount: 85000, type: "debit" },
  { id: 5, date: "2024-11-20", description: "Facebook Refund for Overcharge", amount: 150000, type: "credit" },
  { id: 6, date: "2024-11-20", description: "Claim Payout Withdrawal", amount: 500000, type: "debit" },
  { id: 7, date: "2024-11-21", description: "Facebook Commission Fee", amount: 20000, type: "debit" },
  { id: 8, date: "2024-11-21", description: "Referral Reward Bonus", amount: 100000, type: "credit" },
  { id: 9, date: "2024-11-22", description: "Treasury Deposit Adjustment", amount: 250000, type: "credit" },
  { id: 10, date: "2024-11-22", description: "Account Maintenance Fee", amount: 15000, type: "debit" },
  { id: 11, date: "2024-11-22", description: "Emergency Funds Withdrawal", amount: 300000, type: "debit" }

];

const RecentTransactionsWithShowMore: FC = () => {
  const [visibleTransactions, setVisibleTransactions] = useState(8);

  const showMoreTransactions = () => {
    setVisibleTransactions((prev) => Math.min(prev + 8, transactions.length));
  };

  return (
   <ProtectedRoute>
     <div className="w-full flex flex-col justify-between md:gap-[55px] pt-[90px] lg:pt-5 min-h-screen md:px-5 px-4 pb-10 lg:px-8 bg-slate-100 rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Recent Transactions
        </h2>
        <ul className="divide-y divide-gray-200">
          {transactions.slice(0, visibleTransactions).map((transaction) => (
            <li
              key={transaction.id}
              className="py-4 flex items-center gap-4 justify-between"
            >
              <div>
                <p className="text-gray-700 font-medium">
                  {transaction.description}
                </p>
                <p className="text-gray-500 text-sm">{transaction.date}</p>
              </div>
              <div
                className={`text-sm font-semibold mb-3 ${
                  transaction.type === "credit"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.type === "debit" ? "-" : "+"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Show More Button */}
      {visibleTransactions < transactions.length && (
        <button
          onClick={showMoreTransactions}
          className="w-full bg-gray-200 text-gray-800 font-semibold py-2 rounded-lg hover:bg-gray-300 transition duration-300 my-4"
        >
          Show More
        </button>
      )}
    </div>
   </ProtectedRoute>
  );
};

export default RecentTransactionsWithShowMore;
