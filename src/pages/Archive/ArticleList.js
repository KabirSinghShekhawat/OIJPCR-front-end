import React from 'react'
import {
  Switch,
  Route, Redirect,
} from 'react-router-dom'
import { ArticleCard } from "../../components/Cards";
import { CircularLoader } from "../../components/Loaders";

const ArticleList = (props) => {
  const { path, journals } = props

  return (
    <div className="flex-grow">
      <Switch>
        <Route path={path} render={(routeProps) =>
          <Journals journals={journals} {...routeProps} />}
        />
        <Route exact path={`${path}/*`}
          render={() => <Redirect to="/notFound" />}
        />
      </Switch>
    </div>
  )
}

function Journals({ journals }) {
  let journalList
  if (!journals)
    journalList = <CircularLoader height="h-16" width="w-16" />
  else if (journals.length === 0)
    journalList = 'No Articles Found'
  else journalList = createJournals(journals)

  return (
    <div className="h-full mx-0 md:mx-4">
      <div className="flex flex-row flex-wrap w-full h-full py-2 my-4 justify-evenly editor">
        {journalList}
      </div>
    </div>
  )
}

function createJournals(journals = []) {
  return journals?.map((article) => {
    const articleProps = {
      id: article._id,
      coverPhoto: article.cover,
      cname: {
        container: 'w-5/6 sm:w-2/3',
        button: 'mt-6 flex flex-wrap ml-4',
      },
      ...article,
    }
    return <ArticleCard {...articleProps} key={article._id} />
  })
}

export default ArticleList