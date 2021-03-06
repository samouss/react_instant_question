import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  RefinementList,
  SearchBox,
  Hits,
  Configure,
} from 'react-instantsearch/dom';
import { createInstantSearch } from 'react-instantsearch/server';

const { InstantSearch, findResultsState } = createInstantSearch();
class Search extends Component {
  render() {
    const { resultsState } = this.props;

    return (
      <InstantSearch
        appId="latency"
        apiKey="6be0576ff61c053d5f9a3225e2a90f76"
        indexName="ikea"
        resultsState={resultsState}
      >
        <Configure hitsPerPage={3} />
        <SearchBox />
        <Hits />
        <RefinementList attribute="category" />
      </InstantSearch>
    );
  }
}

Search.propTypes = {
  resultsState: PropTypes.object,
};

export { Search, findResultsState };
