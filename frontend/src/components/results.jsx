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
const modelMetrics = [
  {
    metric: "Linear Regression",
    mae: 2.07886,
    mse: 7.936533,
    r2: 0.4757117,
  },
  {
    metric: "DT Regressor",
    mae: 2.07885,
    mse: 7.936233,
    r2: 0.47574,
  },
  {
    metric: "SVR (RBF Kernel)",
    mae: 2.17527,
    mse: 7.83606,
    r2: 0.4823484,
  },
  {
    metric: "SVR (Sigmoid Kernel)",
    mae: 5.20649,
    mse: 47.27157,
    r2: 0.21227,
  },
  {
    metric: "KNN",
    mae: 5.2064,
    mse: 47.27657,
    r2: 0.21243,
  },
  {
    metric: "RF",
    mae: 0.86816,
    mse: 1.2681,
    r2: 0.91622,
  },
  {
    metric: "ELM (L=50)",
    mae: 0.09819,
    mse: 0.23801,
    r2: 0.99428,
  },
  {
    metric: "Neural Network",
    mae: 0.8216,
    mse: 1.3296,
    r2: 0.92267,
  },
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
                        <TableHead>Metric</TableHead>
                        <TableHead className="text-right">MAE</TableHead>
                        <TableHead className="text-right">MSE</TableHead>
                        <TableHead className="text-right">R²</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {modelMetrics.map((model) => (
                        <TableRow key={model.metric}>
                          <TableCell className="font-medium">
                            {model.metric}
                          </TableCell>
                          <TableCell className="text-right">
                            {model.mae.toFixed(5)}
                          </TableCell>
                          <TableCell className="text-right">
                            {model.mse.toFixed(5)}
                          </TableCell>
                          <TableCell className="text-right">
                            {model.r2.toFixed(5)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-2">
              <CardHeader>
                <CardTitle>Temporal Trends</CardTitle>
                <CardDescription>
                  Actual vs. predicted impact over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex min-h-80 items-center justify-center  border-2 border-gray-300">
                  <img
                    src="Life_Expectancy_Full_Impact-1-1-1.svg"
                    className="w-full h-full object-contain"
                    alt="Life Expectancy Graph"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>
                  Interpreting the time series data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    A <span className="font-semibold">10% increase</span> in
                    income, literacy, and hospital capacity, combined with
                    improved air quality (PM2.5 = 25), leads to an{" "}
                    <span className="font-semibold">
                      average life expectancy (LE) gain of 0.67 years
                    </span>
                    , with increases ranging from 0.30 to 1.38 years.
                  </p>

                  <p>
                    These factors work together—higher incomes improve
                    healthcare access, literacy enhances health awareness,
                    cleaner air reduces respiratory diseases, and hospital
                    expansion strengthens treatment capacity.
                  </p>

                  <p>
                    However,{" "}
                    <span className="font-semibold">diminishing returns</span>{" "}
                    emerge as aging and chronic diseases limit further gains. A{" "}
                    <span className="font-semibold">
                      comprehensive approach
                    </span>{" "}
                    integrating economic growth, environmental policies,
                    education, and healthcare investment is essential for
                    sustained improvements.
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
                <div className="flex min-h-80 items-center justify-center border-dashed border-2 border-gray-300">
                  <img
                    src="12-1.svg"
                    alt="Scatter Plot"
                    className="w-full h-full object-contain"
                  />
                </div>
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
                    Cluster analysis confirms a strong inverse relationship
                    between <span className="font-semibold">PM2.5 levels</span>{" "}
                    and{" "}
                    <span className="font-semibold">life expectancy (LE)</span>.
                    Lower pollution levels are linked to higher LE, supporting
                    existing research on air pollution's health impact.
                  </p>

                  <p>
                    Using K-Means clustering, the optimal number of clusters is{" "}
                    <span className="font-semibold">7</span>. Results show that{" "}
                    <span className="font-semibold">higher PM2.5 levels</span>{" "}
                    consistently correlate with{" "}
                    <span className="font-semibold">greater LE loss</span>.
                  </p>

                  {/* Table */}
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cluster</TableHead>
                        <TableHead className="text-right">
                          PM2.5 (μg/m³)
                        </TableHead>
                        <TableHead className="text-right">
                          Life Expectancy (Years)
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { cluster: "Cluster 0", pm25: 32.77, le: 66.37 },
                        { cluster: "Cluster 1", pm25: 58.26, le: 65.71 },
                        { cluster: "Cluster 2", pm25: 17.79, le: 74.41 },
                        { cluster: "Cluster 3", pm25: 38.49, le: 61.35 },
                        { cluster: "Cluster 4", pm25: 33.99, le: 69.96 },
                        { cluster: "Cluster 5", pm25: 82.6, le: 67.78 },
                        { cluster: "Cluster 6", pm25: 64.86, le: 70.02 },
                      ].map((row, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-small">
                            {row.cluster}
                          </TableCell>
                          <TableCell className="text-right">
                            {row.pm25.toFixed(2)}
                          </TableCell>
                          <TableCell className="text-right">
                            {row.le.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <p>
                    Findings reinforce that{" "}
                    <span className="font-semibold">reducing PM2.5</span> is
                    critical for extending LE. These patterns highlight the need
                    for stronger environmental policies to mitigate air
                    pollution’s health impact.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
