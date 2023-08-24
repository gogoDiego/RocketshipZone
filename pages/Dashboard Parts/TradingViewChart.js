import React, { useRef, useEffect } from "react";
import { createChart, PriceScaleMode } from "lightweight-charts";

const TradingViewChart = React.memo(({ data, className }) => {
    const chartContainerRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (data && chartContainerRef.current) {
            const chart = createChart(chartContainerRef.current, {
                crosshair: {
                    mode: PriceScaleMode.Normal,
                },
                layout: {
                    backgroundColor: "#170f34",
                    textColor: "black",
                    fontSize: 14,
                    fontFamily: "arial",
                },
                grid: {
                    vertLines: {
                        color: "#363a45",
                        visible: false,
                    },
                    horzLines: {
                        color: "#363a45",
                        visible: false,
                    },
                },
                rightPriceScale: {
                    borderColor: "#000",
                    autoScale: true,
                    borderVisible: true,
                    entireTextOnly: true,
                },
                timeScale: {
                    borderColor: "#000",
                    borderVisible: true,
                    visible: true,
                },
            });

            const lineSeries = chart.addLineSeries();
            lineSeries.setData(data);
            chartRef.current = chart;

            return () => {
                chartRef.current.remove();
            };
        }
    }, [data]);

    return <div ref={chartContainerRef} className={className} />;
});

// Set display name for the component
TradingViewChart.displayName = "TradingViewChart";

export default TradingViewChart;
