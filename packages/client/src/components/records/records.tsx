"use client";
import React, { useEffect, useState } from 'react';
import { Record } from "@family-budget/shared";

interface RecordsProps {
}

export const Records: React.FC<RecordsProps> = ({}) => {

  const [records, setRecords] = useState<Record[]>([])

  useEffect(() => {
    (async () => {
      const data = await fetch(' https://t0da7mh77d.execute-api.eu-central-1.amazonaws.com/dev/budget');
      const records = await data.json()
      setRecords(records)
    })()
  }, []);

  return records.map((record) => <div>
    {record.id} - {record.category} - {record.amount} - {record.title}
  </div>);
};
