% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/refresh.R
\name{robyn_refresh}
\alias{robyn_refresh}
\title{Build refresh model}
\usage{
robyn_refresh(
  robyn_object,
  dt_input = dt_input,
  dt_holidays = dt_holidays,
  refresh_steps = 4,
  refresh_mode = "manual",
  refresh_iters = 1000,
  refresh_trials = 3,
  plot_pareto = TRUE
)
}
\arguments{
\item{robyn_object}{Character. Path of the \code{Robyn.RDS} object
that contains all previous modeling information.}

\item{dt_input}{A data.frame. Should include all previous data and newly added
data for the refresh.}

\item{dt_holidays}{A data.frame. Raw input holiday data. Load standard
Prophet holidays using \code{data("dt_prophet_holidays")}.}

\item{refresh_steps}{An integer. It controls how many time units the refresh
model build move forward. For example, \code{refresh_steps = 4} on weekly data
means the InputCollect$window_start & InputCollect$window_end move forward
4 weeks.}

\item{refresh_mode}{A character. Options are "auto" and "manual". In auto mode,
the \code{robyn_refresh()} function builds refresh models with given
\code{refresh_steps} repeatedly until there's no more data available. I
manual mode, the \code{robyn_refresh()} only moves forward \code{refresh_steps}
only once.}

\item{refresh_iters}{An integer. Iterations per refresh. Rule of thumb is, the
more new data added, the more iterations needed. More reliable recommendation
still needs to be investigated.}

\item{refresh_trials}{An integer. Trials per refresh. Defaults to 5 trials.
More reliable recommendation still needs to be investigated.}

\item{plot_pareto}{A logical value. Set to \code{FALSE} to deactivate plotting
and saving model onepagers. Used when testing models.}
}
\value{
A list. The Robyn object.
}
\description{
The \code{robyn_refresh()} function builds update models based on
the previously built models saved in the \code{Robyn.RDS} object specified
in \code{robyn_object}. For example, when updating the initial build with 4
weeks of new data, \code{robyn_refresh()} consumes the selected model of
the initial build. it sets lower and upper bounds of hyperparameters for the
new build around the selected hyperparameters of the previous build,
stabilizes the effect of baseline variables across old and new builds and
regulates the new effect share of media variables towards the latest
spend level. It returns aggregated result with all previous builds for
reporting purpose and produces reporting plots.
}
\examples{
\dontrun{

## NOTE: must run \code{robyn_save()} to select and save an initial model first,
## before refreshing below. The \code{robyn_refresh()} function is suitable for
## updating within "reasonable periods".
## Two situations are considered better to rebuild model:
## 1, most data is new. If initial model has 100 weeks and 80 weeks new data is
## added in refresh, it might be better to rebuild the model
## 2, new variables are added

# Set the Robyn object path
robyn_object <- "~/Desktop/Robyn.RDS"

# Load new data
data("dt_simulated_weekly")
data("dt_prophet_holidays")

# Run \code{robyn_refresh()} with 13 weeks cadance in auto mode
Robyn <- robyn_refresh(
  robyn_object = robyn_object,
  dt_input = dt_simulated_weekly,
  dt_holidays = dt_prophet_holidays,
  refresh_steps = 13,
  refresh_mode = "auto",
  refresh_iters = 200,
  refresh_trials = 5
)

# Run \code{robyn_refresh()} with 4 weeks cadance in manual mode
Robyn <- robyn_refresh(
  robyn_object = robyn_object,
  dt_input = dt_simulated_weekly,
  dt_holidays = dt_prophet_holidays,
  refresh_steps = 4,
  refresh_mode = "manual",
  refresh_iters = 200,
  refresh_trials = 5
)
}
}
