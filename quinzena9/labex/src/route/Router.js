import React from 'react'
import { HomePage } from '../pages/HomePage'
import { ListTripsPage } from '../pages/ListTripsPage'
import { ApplicationFormPage } from '../pages/ApplicationFormPage'
import { LoginPage } from '../pages/LoginPage'
import { AdminHomePage } from '../pages/AdminHomePage'
import { TripDetailsPage } from '../pages/TripDetailsPage'
import { CreateTripPage } from '../pages/CreateTripPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/trips/list'}>
                    <ListTripsPage />
                </Route>

                <Route exact path={'/trips/application'}>
                    <ApplicationFormPage />
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage />
                </Route>

                <Route exact path={'/admin/trips/list'}>
                    <AdminHomePage />
                </Route>

                <Route exact path={'/admin/trips/create'}>
                    <CreateTripPage/>
                </Route>

                <Route exact path={'/admin/trip/:id'}>
                    <TripDetailsPage />
                </Route>

                <Route>
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}