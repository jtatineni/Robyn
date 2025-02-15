% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/model.R
\name{robyn_response}
\alias{robyn_response}
\title{The response function}
\usage{
robyn_response(
  robyn_object = NULL,
  select_build = NULL,
  paid_media_var = NULL,
  select_model = NULL,
  spend = NULL,
  dt_hyppar = NULL,
  dt_coef = NULL,
  InputCollect = NULL
)
}
\arguments{
\item{robyn_object}{Character. Path of the \code{Robyn.RDS} object
that contains all previous modeling information.}

\item{select_build}{Integer. Default to the latest model build. \code{select_buil = 0}
selects the initial model. \code{select_buil = 1} selects the first refresh model.}

\item{paid_media_var}{A character. Selected paid media variable for the response.
Must be within \code{InputCollect$paid_media_vars}}

\item{select_model}{Character. A model \code{SolID}. When \code{robyn_object}
is provided, \code{select_model} defaults to the already selected \code{SolID}. When
\code{robyn_object} is not provided, \code{select_model} must be provided with
\code{InputCollect} and \code{OutputCollect}, and must be one of
\code{OutputCollect$allSolutions}.}

\item{spend}{Numeric. The desired spend level to return a response for.}

\item{dt_hyppar}{A data.table. When \code{robyn_object} is not provided, use
\code{dt_hyppar = OutputCollect$resultHypParam}. It must be provided along
\code{select_model}, \code{dt_coef} and \code{InputCollect}.}

\item{dt_coef}{A data.table. When \code{robyn_object} is not provided, use
\code{dt_coef = OutputCollect$xDecompAgg}. It must be provided along
\code{select_model}, \code{dt_hyppar} and \code{InputCollect}.}

\item{InputCollect}{List. Contains all input parameters for the model.
Required when \code{robyn_object} is not provided.}
}
\description{
The \code{robyn_response()} function returns the response for a given
spend level of a given \code{paid_media_vars} from a selected model
result from a selected model build (initial model, refresh model etc.).
}
\examples{
\dontrun{
## Get marginal response (mResponse) and marginal ROI (mROI) for
## the next 1k on 80k for search_clicks_P, when provided the saved
## robyn_object by the robyn_save() function.

# Get response for 80k
spend1 <- 80000
Response1 <- robyn_response(
  robyn_object = robyn_object,
  paid_media_var = "search_clicks_P",
  spend = spend1
)

# Get ROI for 80k
Response1 / spend1 # ROI for search 80k

# Get response for 81k
spend2 <- spend1 + 1000
Response2 <- robyn_response(
  robyn_object = robyn_object,
  paid_media_var = "search_clicks_P",
  spend = spend2
)

# Get ROI for 81k
Response2 / spend2 # ROI for search 81k

# Get marginal response (mResponse) for the next 1k on 80k
Response2 - Response1

# Get marginal ROI (mROI) for the next 1k on 80k
(Response2 - Response1) / (spend2 - spend1)


## Get response for 80k for search_clicks_P from the third model refresh

robyn_response(
  robyn_object = robyn_object,
  select_build = 3,
  paid_media_var = "search_clicks_P",
  spend = 80000
)

## Get response for 80k for search_clicks_P from the a certain model SolID
## in the current model output in the global environment

robyn_response(,
  paid_media_var = "search_clicks_P",
  select_model = "3_10_3",
  spend = 80000,
  dt_hyppar = OutputCollect$resultHypParam,
  dt_coef = OutputCollect$xDecompAgg,
  InputCollect = InputCollect
)
}
}
