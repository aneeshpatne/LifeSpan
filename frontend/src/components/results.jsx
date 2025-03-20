"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Info, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data arrays
const mlResults = [
  {
    region: "South Asia",
    pm25: 42.3,
    lifeExpectancyLoss: 5.6,
    confidence: 0.92,
  },
  {
    region: "East Asia",
    pm25: 28.7,
    lifeExpectancyLoss: 3.1,
    confidence: 0.89,
  },
  {
    region: "Middle East",
    pm25: 35.2,
    lifeExpectancyLoss: 2.8,
    confidence: 0.87,
  },
  { region: "Africa", pm25: 24.1, lifeExpectancyLoss: 2.2, confidence: 0.85 },
  { region: "Europe", pm25: 12.8, lifeExpectancyLoss: 0.8, confidence: 0.94 },
  {
    region: "North America",
    pm25: 8.4,
    lifeExpectancyLoss: 0.4,
    confidence: 0.95,
  },
];

const lineChartData = [
  { year: "2010", actual: 1.8, predicted: 1.7 },
  { year: "2012", actual: 1.9, predicted: 1.9 },
  { year: "2014", actual: 2.0, predicted: 2.0 },
  { year: "2016", actual: 2.1, predicted: 2.1 },
  { year: "2018", actual: 2.1, predicted: 2.2 },
  { year: "2020", actual: 2.2, predicted: 2.3 },
  { year: "2022", actual: 2.2, predicted: 2.4 },
  { year: "2024", actual: null, predicted: 2.5 },
  { year: "2026", actual: null, predicted: 2.6 },
];

const scatterData = [
  { pm25: 8.4, lifeExpectancyLoss: 0.4, region: "North America" },
  { pm25: 12.8, lifeExpectancyLoss: 0.8, region: "Europe" },
  { pm25: 24.1, lifeExpectancyLoss: 2.2, region: "Africa" },
  { pm25: 28.7, lifeExpectancyLoss: 3.1, region: "East Asia" },
  { pm25: 35.2, lifeExpectancyLoss: 2.8, region: "Middle East" },
  { pm25: 42.3, lifeExpectancyLoss: 5.6, region: "South Asia" },
];

export default function Results() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* Inserted Card Grid Design */}
      <div className="mt-8">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Research Results
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Key findings from our study on air pollution's impact on life
              expectancy
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* ML Model Results Card */}
            <Card className="md:col-span-2 lg:col-span-3">
              <CardHeader>
                <CardTitle>Machine Learning Model Results</CardTitle>
                <CardDescription>
                  Regional predictions of life expectancy impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Region</TableHead>
                        <TableHead className="text-right">
                          PM2.5 (μg/m³)
                        </TableHead>
                        <TableHead className="text-right">
                          Life Expectancy Loss (Years)
                        </TableHead>
                        <TableHead className="text-right">
                          Model Confidence
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mlResults.map((result) => (
                        <TableRow key={result.region}>
                          <TableCell className="font-medium">
                            {result.region}
                          </TableCell>
                          <TableCell className="text-right">
                            {result.pm25.toFixed(1)}
                          </TableCell>
                          <TableCell className="text-right">
                            {result.lifeExpectancyLoss.toFixed(1)}
                          </TableCell>
                          <TableCell className="text-right">
                            {(result.confidence * 100).toFixed(0)}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Line Chart Placeholder Card */}
            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Temporal Trends</CardTitle>
                <CardDescription>
                  Actual vs. predicted impact over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for your graph */}
                <div className="flex h-80 items-center justify-center  border-2 border-gray-300"></div>
              </CardContent>
            </Card>

            {/* Line Chart Explanation Card */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>
                  Interpreting the temporal data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The placeholder above represents the line chart comparing
                    actual observed global average life expectancy reduction
                    with our model's predictions. Historical data shows a steady
                    increase in the global health burden of air pollution.
                  </p>
                  <p>Key observations:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>
                      Global impact increased from 1.8 to 2.2 years between
                      2010-2022
                    </li>
                    <li>
                      Model projections suggest continued worsening to 2.6 years
                      by 2026
                    </li>
                    <li>
                      Model accuracy is 94% when validated against historical
                      data
                    </li>
                    <li>Projections assume no major policy interventions</li>
                  </ul>
                  <p>
                    This trend highlights the urgent need for stronger air
                    quality policies and interventions globally.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Scatter Plot Placeholder Card */}
            <Card className="md:col-span-1 lg:col-span-2">
              <CardHeader>
                <CardTitle>PM2.5 vs. Life Expectancy Correlation</CardTitle>
                <CardDescription>Regional data points</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for your scatter graph */}
                <div className="flex h-80 items-center justify-center border-dashed border-2 border-gray-300"></div>
              </CardContent>
            </Card>

            {/* Scatter Plot Explanation Card */}
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Correlation Analysis</CardTitle>
                <CardDescription>Interpreting the scatter plot</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The placeholder above represents the scatter plot that
                    illustrates the relationship between PM2.5 concentration and
                    life expectancy reduction across different regions. Each
                    point represents a region.
                  </p>
                  <p>Key findings:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>Strong positive correlation (R² = 0.89)</li>
                    <li>
                      Non-linear relationship with accelerating health impacts
                      at higher pollution levels
                    </li>
                    <li>
                      South Asia shows both highest pollution and greatest
                      health impact
                    </li>
                    <li>
                      For every 10 μg/m³ increase in PM2.5, life expectancy
                      decreases by approximately 0.98 years
                    </li>
                  </ul>
                  <p>
                    This data suggests that the most polluted regions would see
                    disproportionate health benefits from even modest reductions
                    in air pollution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Methodology Summary
            </h3>
            <p className="mt-4 text-gray-600">
              Our research combines air quality data from over 30,000 monitoring
              stations worldwide with health outcome data from the Global Burden
              of Disease study. Using gradient-boosted decision trees, we've
              established the relationship between PM2.5 exposure levels and
              mortality risk across different age groups and regions. The model
              accounts for confounding factors such as socioeconomic status,
              healthcare access, and baseline health conditions to isolate the
              specific impact of PM2.5 exposure on life expectancy.
            </p>
            <div className="mt-6 flex justify-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Download Full Research Report
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
