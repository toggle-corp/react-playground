import React, { Component } from 'react';
import { randomUniform } from 'd3-random';
import { range } from 'd3-array';

import styles from './styles.scss';

import VerticalTabs from '#rscv/VerticalTabs';
import MultiViewContainer from '#rscv/MultiViewContainer';

import ChordDiagram from '#rscz/ChordDiagram';
import ClusterForceLayout from '#rscz/ClusterForceLayout';
import CollapsibleTree from '#rscz/CollapsibleTree';
import CorrelationMatrix from '#rscz/CorrelationMatrix';
import Dendrogram from '#rscz/Dendrogram';
import DonutChart from '#rscz/DonutChart';
import ForceDirectedGraph from '#rscz/ForceDirectedGraph';
import ForceDirectedGraphContainer from '#rscz/ForceDirectedGraphContainer';
import GoogleOrgChart from '#rscz/GoogleOrgChart';
import HorizontalBar from '#rscz/HorizontalBar';
import OrgChart from '#rscz/OrgChart';
import Organigram from '#rscz/Organigram';
import ParallelCoordinates from '#rscz/ParallelCoordinates';
import PieChart from '#rscz/PieChart';
import RadialDendrogram from '#rscz/RadialDendrogram';
import Sankey from '#rscz/Sankey';
import SimpleHorizontalBarChart from '#rscz/SimpleHorizontalBarChart';
import SimpleVerticalBarChart from '#rscz/SimpleVerticalBarChart';
import SparkLines from '#rscz/SparkLines';
import StackedBarChart from '#rscz/StackedBarChart';
import StreamGraph from '#rscz/StreamGraph';
import SunBurst from '#rscz/SunBurst';
import TreeMap from '#rscz/TreeMap';
import VerticalBarChart from '#rscz/VerticalBarChart';
import WordCloud from '#rscz/WordCloud';
import ZoomableTreeMap from '#rscz/ZoomableTreeMap';
import wrapViz from '#rscz/VizWrapper';

import Histogram from '#rscz/Histogram';

import barData from '#resources/data/barData.js';
import orgChartData from '#resources/data/orgChartData.js';
import chordData from '#resources/data/chordData';
import correlationData from '#resources/data/correlationData';
import clusterData from '#resources/data/clusterData';
import forceDirectedData from '#resources/data/forceDirectedData';
import hierarchicalData from '#resources/data/hierarchical';
import lineData from '#resources/data/lineData';
import parallelData from '#resources/data/parallelData';
import sankeyData from '#resources/data/sankeyData';
import stackedData from '#resources/data/stackedData';
import streamData from '#resources/data/streamData';
import words from '#resources/data/wordCloudData';

const histogramData = range(2000).map(randomUniform(0, 0));

class Visualization extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            value: [],
            // range: undefined,
        });
        this.tabs = {
            chordDiagram: 'Chord Diagram',
            clusterForceLayout: 'Cluster Force Layout',
            collapsibleTree: 'Collapsible Tree',
            correlationMatrix: 'Correlation Matrix',
            dendrogram: 'Dendrogram',
            donutChart: 'Donut Chart',
            forcedDirectedGraph: 'Force Directed Graph',
            forcedDirectedGraphVoronoi: 'Force Directed Graph (Voronoi)',
            googleOrgChart: 'Google Org Chart',
            histogram: 'Histogram',
            horizontalBar: 'Horizontal Bar',
            orgChart: 'Org Chart',
            organigram: 'Organigram',
            parallelCoordinates: 'Parallel Coordinates',
            pieChart: 'Pie Chart',
            radialDendrogram: 'Radial Dendrogram',
            sankey: 'Sankey Diagram',
            simpleHorizontalBarChart: 'Simple Horizontal Bar Chart',
            simpleVerticalBarChart: 'Simple Vertical Bart Chart',
            sparkLines: 'Spark Lines',
            stackedBarChart: 'Stacked Bar Chart',
            streamGraph: 'Stream Graph',
            sunBurst: 'Sunburst',
            treemap: 'Treemap',
            verticalBarChart: 'Vertical Bar Chart',
            wordCloud: 'Word Cloud',
            zoomableTreemap: 'Zoomable Treemap',
        };

        this.views = {
            chordDiagram: {
                wrapContainer: true,
                component: () => (
                    <ChordDiagram
                        className={styles.viz}
                        data={chordData.values}
                        labelsData={chordData.labels}
                    />
                ),
            },
            collapsibleTree: {
                wrapContainer: true,
                component: () => (
                    <CollapsibleTree
                        className={styles.viz}
                        data={hierarchicalData}
                        labelSelector={d => d.name}
                    />
                ),
            },
            correlationMatrix: {
                wrapContainer: true,
                component: () => (
                    <CorrelationMatrix
                        className={styles.viz}
                        data={correlationData}
                        colorSchemeType="continuous"
                    />
                ),
            },
            dendrogram: {
                wrapContainer: true,
                component: () => (
                    <Dendrogram
                        className={styles.viz}
                        data={hierarchicalData}
                        labelSelector={d => d.name}
                        valueSelector={d => d.size}
                    />
                ),
            },
            donutChart: {
                wrapContainer: true,
                component: () => (
                    <DonutChart
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                        period={30}
                    />
                ),
            },
            forcedDirectedGraph: {
                wrapContainer: true,
                component: () => (
                    <ForceDirectedGraph
                        className={styles.viz}
                        data={forceDirectedData}
                        idSelector={d => d.id}
                        groupSelector={d => d.group}
                        valueSelector={d => d.value}
                        useVoronoi={false}
                    />
                ),
            },
            forcedDirectedGraphVoronoi: {
                wrapContainer: true,
                component: () => (
                    <ForceDirectedGraph
                        className={styles.viz}
                        data={forceDirectedData}
                        idSelector={d => d.id}
                        groupSelector={d => d.group}
                        valueSelector={d => d.value}
                        useVoronoi
                    />
                ),
            },
            googleOrgChart: {
                wrapContainer: true,
                component: () => {
                    const { value } = this.state;
                    return (
                        <GoogleOrgChart
                            className={styles.viz}
                            options={orgChartData}
                            value={value}
                            keySelector={d => d.key}
                            multiSelect
                            childSelector={d => d.organs}
                            titleSelector={d => d.title}
                        />
                    );
                },
            },
            clusterForceLayout: {
                wrapContainer: true,
                component: () => (
                    <ClusterForceLayout
                        className={styles.viz}
                        data={clusterData}
                        idSelector={d => d.value}
                        groupSelector={d => d.cluster}
                        valueSelector={d => d.score}
                    />
                ),
            },
            horizontalBar: {
                wrapContainer: true,
                component: () => (
                    <HorizontalBar
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                        showLabels={false}
                        showTooltip
                    />
                ),
            },
            orgChart: {
                wrapContainer: true,
                component: () => (
                    <OrgChart
                        className={styles.viz}
                        data={hierarchicalData}
                        idSelector={d => d.name}
                    />
                ),
            },
            organigram: {
                wrapContainer: true,
                component: () => (
                    <Organigram
                        className={styles.viz}
                        data={hierarchicalData}
                        idSelector={d => d.name}
                        labelSelector={d => d.name}
                    />
                ),

            },
            parallelCoordinates: {
                wrapContainer: true,
                component: () => (
                    <ParallelCoordinates
                        data={parallelData}
                        className={styles.viz}
                        ignoreProperties={['name']}
                        labelName="name"
                        labelSelector={d => d.name}
                    />
                ),
            },
            pieChart: {
                wrapContainer: true,
                component: () => (
                    <PieChart
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                    />
                ),
            },
            radialDendrogram: {
                wrapContainer: true,
                component: () => (
                    <RadialDendrogram
                        className={styles.viz}
                        data={hierarchicalData}
                        labelSelector={d => d.name}
                    />
                ),
            },
            sankey: {
                wrapContainer: true,
                component: () => (
                    <Sankey
                        className={styles.viz}
                        data={sankeyData}
                        valueSelector={d => d.value}
                        labelSelector={d => d.name}
                    />
                ),
            },
            sparkLines: {
                wrapContainer: true,
                component: () => (
                    <SparkLines
                        className={styles.viz}
                        data={lineData.data}
                        xValueSelector={d => d.label}
                        yValueSelector={d => d.value}
                    />
                ),
            },
            stackedBarChart: {
                wrapContainer: true,
                component: () => (
                    <StackedBarChart
                        data={stackedData}
                        className={styles.viz}
                        labelName="month"
                        labelSelector={d => d.month}
                    />
                ),
            },
            streamGraph: {
                wrapContainer: true,
                component: () => (
                    <StreamGraph
                        data={streamData}
                        className={styles.viz}
                        labelName="time"
                        labelSelector={d => d.time}
                    />
                ),
            },
            sunBurst: {
                wrapContainer: true,
                component: () => (
                    <SunBurst
                        className={styles.viz}
                        data={hierarchicalData}
                        valueSelector={d => d.size}
                        labelSelector={d => d.name}
                    />
                ),
            },
            treemap: {
                wrapContainer: true,
                component: () => (
                    <TreeMap
                        className={styles.viz}
                        data={hierarchicalData}
                        valueSelector={d => d.size}
                        labelSelector={d => d.name}
                    />
                ),
            },
            zoomableTreemap: {
                wrapContainer: true,
                component: () => (
                    <ZoomableTreeMap
                        className={styles.viz}
                        data={hierarchicalData}
                        valueSelector={d => d.size}
                        labelSelector={d => d.name}
                    />
                ),
            },
            verticalBarChart: {
                wrapContainer: true,
                component: () => (
                    <VerticalBarChart
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                        margins={
                            {
                                top: 0,
                                right: 0,
                                bottom: 24,
                                left: 0,
                            }
                        }
                    />
                ),
            },
            simpleHorizontalBarChart: {
                wrapContainer: true,
                component: () => (
                    <SimpleHorizontalBarChart
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                        showLabels={false}
                        showTooltip
                    />
                ),
            },
            simpleVerticalBarChart: {
                wrapContainer: true,
                component: () => (
                    <SimpleVerticalBarChart
                        className={styles.viz}
                        data={barData.data}
                        valueSelector={d => d.value}
                        labelSelector={d => d.label}
                        showAxis={false}
                        margins={
                            {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }
                        }
                    />
                ),
            },
            wordCloud: {
                wrapContainer: true,
                component: () => (
                    <WordCloud
                        data={words}
                        className={styles.viz}
                    />
                ),
            },
            histogram: {
                wrapContainer: true,
                component: () => (
                    <Histogram
                        className={styles.viz}
                        data={histogramData}
                    />
                ),
            },
        };
    }

    render() {
        return (
            <div className={styles.dashboard}>
                <div className={styles.content}>
                    <VerticalTabs
                        tabs={this.tabs}
                        className={styles.tabs}
                        useHash
                    />
                    <MultiViewContainer
                        containerClassName={styles.container}
                        views={this.views}
                        useHash
                    />
                </div>
            </div>
        );
    }
}

export default Visualization;
