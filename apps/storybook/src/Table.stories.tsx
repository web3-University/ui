import type { Meta, StoryObj } from "@storybook/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@web3-university/ui";

const meta = {
  title: "shadcn/ui/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "已支付",
    totalAmount: "¥250.00",
    paymentMethod: "信用卡",
  },
  {
    invoice: "INV002",
    paymentStatus: "待支付",
    totalAmount: "¥150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "未支付",
    totalAmount: "¥350.00",
    paymentMethod: "银行转账",
  },
  {
    invoice: "INV004",
    paymentStatus: "已支付",
    totalAmount: "¥450.00",
    paymentMethod: "信用卡",
  },
  {
    invoice: "INV005",
    paymentStatus: "已支付",
    totalAmount: "¥550.00",
    paymentMethod: "PayPal",
  },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>最近的发票列表</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">发票号</TableHead>
          <TableHead>状态</TableHead>
          <TableHead>支付方式</TableHead>
          <TableHead className="text-right">金额</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
