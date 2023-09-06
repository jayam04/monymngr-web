"use client";

import { PageHeading } from "@/components/Headings";
import NewTranscationDialog from "@/components/NewTransactionDialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { format } from 'date-fns'; // Import the format function from date-fns

import { transactions, accounts } from "@/data/transactions";

export default function TransactionsPage() {
      
  return (
    <>
      <PageHeading heading={"transactions"} />
      <NewTranscationDialog />

      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]">id</TableHead> */}
            <TableHead>description</TableHead>
            {/* <TableHead>wallet</TableHead> */}
            <TableHead>date</TableHead>
            <TableHead>category</TableHead>
            <TableHead className="text-right font-mono">amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {transactions.map((transaction) => (
                <TableRow key={transaction.id} className="justify-right">
                    {/* <TableCell>{transaction.id}</TableCell> */}
                    <TableCell>{transaction.description}</TableCell>
                    {/* <TableCell>{transaction.wallet}</TableCell> */}
                    {/* <TableCell>{format(transaction.date, 'MM/dd/yyyy')}</TableCell> */}
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.category} / {transaction.subcategory}</TableCell>
                    {/* <TableCell className="font-mono text-right">{transaction.amount}</TableCell> */}
                    <TableCell>
                        {transaction.accounts ? (Object.entries(transaction.accounts).map(([key, value]) => 
                            <div key={key} className="flex flex-row">
                                <p className="font-mono w-20">{value} {accounts[key]["currencies"]}</p>
                                <p>{accounts[key]["name"]}</p>
                            </div>
                        ))
                        : <p className="font-mono text-red-600">{`Wait! I can't find account. Would you like to edit transaction? `}{transaction.id}</p>
                        }
                    </TableCell>

                </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
